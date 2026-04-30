import { Redirect, Route, Switch } from "wouter";
import { SubjectPage } from "@/pages/SubjectPage";
import { getSubject } from "@/subjects";

function NotFound() {
  return (
    <main className="min-h-screen bg-bg p-10 text-center font-serif text-text">
      <h1 className="font-display text-2xl text-gold">404 — Không tìm thấy trang</h1>
      <p className="mt-3 text-text-dim">
        Trang bạn yêu cầu không tồn tại. Quay lại{" "}
        <a href="/lichsu" className="text-gold underline">
          phần Lịch sử
        </a>{" "}
        hoặc{" "}
        <a href="/sinhhoc" className="text-gold underline">
          phần Sinh học
        </a>
        .
      </p>
    </main>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/lichsu" replace />
      </Route>
      <Route path="/lichsu">
        <SubjectPage subject={getSubject("lichsu")} />
      </Route>
      <Route path="/sinhhoc">
        <SubjectPage subject={getSubject("sinhhoc")} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
