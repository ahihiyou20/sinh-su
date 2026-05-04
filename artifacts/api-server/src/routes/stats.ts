import { Router } from "express";
import { logger } from "../lib/logger";
import fs from "node:fs";
import path from "node:path";

const router = Router();

const DATA_DIR = path.join(process.cwd(), "data");
const STATS_FILE = path.join(DATA_DIR, "stats.json");

interface StatsData {
  deviceIds: string[];
  totalPings: number;
}

function loadStats(): StatsData {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(STATS_FILE)) {
      const raw = fs.readFileSync(STATS_FILE, "utf-8");
      const parsed = JSON.parse(raw) as StatsData;
      if (Array.isArray(parsed.deviceIds) && typeof parsed.totalPings === "number") {
        return parsed;
      }
    }
  } catch {
    // ignore — start fresh
  }
  return { deviceIds: [], totalPings: 0 };
}

function saveStats(data: StatsData): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STATS_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    logger.error({ err }, "[USER-COUNT] Failed to save stats to disk");
  }
}

const persisted = loadStats();
const knownDevices = new Set<string>(persisted.deviceIds);
let totalPings = persisted.totalPings;

logger.info(
  { uniqueDevices: knownDevices.size, totalPings },
  `[USER-COUNT] Loaded from disk — ${knownDevices.size} unique device(s) so far`,
);

router.post("/ping", (req, res) => {
  const { deviceId, subject } = req.body as {
    deviceId?: unknown;
    subject?: unknown;
  };

  if (typeof deviceId !== "string" || !deviceId) {
    res.status(400).json({ error: "deviceId required" });
    return;
  }

  totalPings += 1;
  const isNew = !knownDevices.has(deviceId);
  if (isNew) {
    knownDevices.add(deviceId);
    saveStats({ deviceIds: Array.from(knownDevices), totalPings });
  } else {
    saveStats({ deviceIds: Array.from(knownDevices), totalPings });
  }

  logger.info(
    {
      deviceId: deviceId.slice(0, 8) + "…",
      subject,
      isNew,
      uniqueDevices: knownDevices.size,
      totalPings,
    },
    isNew
      ? `[USER-COUNT] 🆕 New device — total unique: ${knownDevices.size}`
      : `[USER-COUNT] Returning device — unique: ${knownDevices.size}, pings: ${totalPings}`,
  );

  res.json({
    ok: true,
    isNew,
    uniqueDevices: knownDevices.size,
    totalPings,
  });
});

router.get("/stats", (_req, res) => {
  res.json({
    uniqueDevices: knownDevices.size,
    totalPings,
    message: `${knownDevices.size} unique visitor(s) have used Study3N.`,
  });
});

export default router;
