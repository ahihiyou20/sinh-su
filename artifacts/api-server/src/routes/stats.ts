import { Router } from "express";
import { logger } from "../lib/logger";

const router = Router();

// In-memory device registry — resets on server restart which is fine;
// the goal is to log a running count to the Replit console, not durable storage.
const knownDevices = new Set<string>();
let totalPings = 0;

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
  res.json({ uniqueDevices: knownDevices.size, totalPings });
});

export default router;
