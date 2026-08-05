import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Transfer from "./components/Transfer";
import Payment from "./components/Payment";
import Transactions from "./components/Transactions";
import Invoices from "./components/Invoices";
import Plans from "./components/Plans";
import Cards from "./components/Cards";
import Investments from "./components/Investments";
import InBox from "./components/InBox";
import PromoDetailsPage from "./components/PromoDetailsPage";
import Promos from "./components/PromosPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payments/transfer" element={<Transfer />} />
        <Route path="/payments/payment" element={<Payment />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/saving-plans" element={<Plans />} />
         <Route path="/Cards" element={<Cards/>} />
         <Route path="/Investments" element={<Investments/>} />
           <Route path="/InBox" element={<InBox/>} />
<Route path="/transactions" element={<Transactions />} />
<Route path="/Promos" element={<Promos/>} />
<Route path="/promos/:id" element={<PromoDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;