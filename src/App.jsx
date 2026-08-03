import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Transfer from "./components/Transfer";
import Payment from "./components/Payment";
import Transactions from "./components/Transactions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payments/transfer" element={<Transfer />} />
        <Route path="/payments/payment" element={<Payment />} />
        

<Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;