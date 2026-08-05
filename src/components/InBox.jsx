import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBarActions from "../components/TopBarActions";
import { ArrowLeft, Image as ImageIconLucide, ChevronRight as ChevronRightLucide } from "lucide-react";

import Star from "../assets/Star.png";
import Dots from "../assets/dots.png";
import Delete from "../assets/Delete.png";
import ChevronLeft from "../assets/ArchiveTray.png";

const COLORS = {
  light: "#BBF49C",
  dark: "#1E4841",
  bg: "#ECF4E9",
};

const mails = [
  { id: 1, title: "Account Security Update", desc: "Your password was successfully updated.", time: "09:43 AM", starred: false },
  { id: 2, title: "Successful Transfer Completed", desc: "Your transfer of $1000 to Sarah Connors is complete.", time: "08:00 AM", starred: false },
  { id: 3, title: "Payment Received", desc: "You've received a payment of $750 from Mike Johnson.", time: "Sep 20", starred: false },
  { id: 4, title: "Investment Alert: Tech Stocks Surge", desc: "Check out the latest surge in tech stocks today!", time: "Sep 20", starred: true },
  { id: 5, title: "Monthly Account Summary", desc: "Your monthly account summary is ready to view.", time: "Sep 19", starred: false },
  { id: 6, title: "Budget Close to Limit", desc: "You are nearing your set budget limit for groceries this month.", time: "Sep 17", starred: false },
  { id: 7, title: "Scheduled Maintenance Reminder", desc: "We will undergo scheduled maintenance from 12 AM to 3 AM tonight.", time: "Sep 15", starred: false },
  { id: 8, title: "New Feature: Advanced Budgeting Tools", desc: "Explore our new advanced budgeting tools to better manage your finances.", time: "Sep 14", starred: true, active: true },
  { id: 9, title: "Annual Account Review Ready", desc: "Your yearly financial review is now available.", time: "Sep 13", starred: false },
  { id: 10, title: "Credit Score Update", desc: "Your latest credit score has been updated. Check your dashboard to see what your credit means.", time: "Sep 12", starred: false },
];

const budgetCategories = [
  { label: "Rent & Living", pct: 60, amount: 2100, color: COLORS.dark },
  { label: "Investment", pct: 15, amount: 525, color: COLORS.light },
  { label: "Education", pct: 12, amount: 420, color: "#6FA96A" },
  { label: "Food & Drink", pct: 8, amount: 280, color: "#A5D89A" },
  { label: "Entertainment", pct: 5, amount: 175, color: "#D9EFCF" },
];

function DonutChart({ data, total }) {
  const radius = 60;
  const stroke = 22;
  const circumference = 2 * Math.PI * radius;
  let offsetAcc = 0;

  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <g transform="translate(80,80) rotate(-90)">
        {data.map((slice, i) => {
          const dash = (slice.pct / 100) * circumference;
          const gap = circumference - dash;
          const circle = (
            <circle
              key={i}
              r={radius}
              fill="transparent"
              stroke={slice.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offsetAcc}
              strokeLinecap="butt"
            />
          );
          offsetAcc += dash;
          return circle;
        })}
      </g>
      <text x="80" y="75" textAnchor="middle" fontSize="11" fill="#6B7280">
        Total Budget
      </text>
      <text x="80" y="95" textAnchor="middle" fontSize="18" fontWeight="700" fill={COLORS.dark}>
        ${total.toLocaleString()}
      </text>
    </svg>
  );
}

function Inbox() {
  const [selectedId, setSelectedId] = useState(8);
  const selectedMail = mails.find((m) => m.id === selectedId) || mails[0];
  const totalBudget = budgetCategories.reduce((s, c) => s + c.amount, 0);

  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-2 shrink-0">
          <h1 className="text-lg font-semibold text-[#173B2A]">Inbox</h1>
          <div className="flex items-center gap-3">
            <TopBarActions userName="Andrew Forbist" />
          </div>
        </div>

        <div className="flex border-t border-gray-100">
          <div className="w-[340px] shrink-0 border-r border-gray-100">
            <div className="flex items-center gap-2 px-4 py-3">
              <div className="flex items-center flex-1 bg-gray-50 rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Search inbox"
                  className="bg-transparent outline-none text-sm flex-1 text-gray-600"
                />
              </div  >
              <button className="p-2 rounded-lg hover:bg-gray-50">
                <img src={Dots} alt="options" className="w-5 h-5  " />
              </button>
            </div>

            {mails.map((mail) => (
              <button
                key={mail.id}
                onClick={() => setSelectedId(mail.id)}
                className={`w-full text-left px-4 py-3 border-b border-gray-50 flex gap-2 items-start hover:bg-gray-50 transition-colors ${
                  mail.id === selectedId ? "bg-[#ECF4E9]" : ""
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 truncate">
                      {mail.title}
                    </span>
                    <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">
                      {mail.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-0.5">
                    {mail.desc}
                  </p>
                </div>
                <img
                  src={Star}
                  alt="star"
                  className={`w-4 h-4 mt-1 ${mail.starred ? "opacity-100" : "opacity-30"}`}
                />
              </button>
            ))}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg hover:bg-gray-50">
                  <ArrowLeft className="w-5 h-5 text-[#616D75]" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-50">
                  <ImageIconLucide className="w-5 h-5 text-[#616D75]" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-50">
                  <img src={Delete} alt="delete" className="w-7 h-7" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-50">
                  <img src={Dots} alt="options" className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">4 from 36</span>
                <button className="p-1 rounded hover:bg-gray-50">
                  <img src={ChevronLeft} alt="previous" className="w-3.5 h-3.5" />
                </button>
                <button className="p-1 rounded hover:bg-gray-50">
                  <ChevronRightLucide className="w-3.5 h-3.5 text-[#616D75]" />
                </button>
              </div>
            </div>

            <div className="px-8 py-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedMail.title}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                14 September 2026, 07:00 AM
              </p>

              <div className="mt-6 text-sm text-gray-700 leading-relaxed space-y-4">
                <p>Hello Andrew,</p>
                <p>
                  We're excited to announce the launch of our new Advanced
                  Budgeting Tools! Designed to give you greater control over
                  your finances, these tools come packed with features that
                  allow for more detailed budgeting, customized spending
                  alerts, and interactive financial health assessments.
                </p>
                <p>Starting today, you can access these features through your Coinest dashboard. Here's what you can look forward to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Custom Budget Categories:</span>{" "}
                    Tailor your budget to match your spending habits with
                    customizable categories.
                  </li>
                  <li>
                    <span className="font-medium">Spending Alerts:</span> Set up
                    alerts to notify you when you're close to reaching your
                    budget limit in any category.
                  </li>
                  <li>
                    <span className="font-medium">Financial Health Score:</span>{" "}
                    Use our new tool to get a snapshot of your financial
                    health based on your income, expenses, and savings.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="border border-gray-100 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Budget Categories
                    </h3>
                    <select className="text-xs text-gray-500 border-none bg-transparent outline-none">
                      <option>This Month</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-4">
                    <DonutChart data={budgetCategories} total={totalBudget} />
                    <div className="flex-1 space-y-2">
                      {budgetCategories.map((c, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                            <span className="text-gray-500">{c.pct}%</span>
                            <span className="text-gray-700">{c.label}</span>
                          </div>
                          <span className="font-medium text-gray-900">${c.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="border border-gray-100 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-gray-900">
                        Spending Limits
                      </h3>
                      <img src={Dots} alt="options" className="w-4 h-4 opacity-50" />
                    </div>
                    <div className="w-full h-8 rounded-md bg-[#BBF49C] overflow-hidden">
                      <div className="h-full rounded-md" style={{ width: "45%", backgroundColor: COLORS.dark }} />
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs">
                      <span className="text-gray-500">$4,500.00 spent of $8,000.00</span>
                      <span className="font-medium text-gray-900">45%</span>
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-2xl p-5 flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Finance Score
                    </h3>
                    <p className="text-xs text-gray-500">Finance Quality</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-lg font-bold" style={{ color: COLORS.dark }}>
                        Excellent
                      </span>
                      <span className="text-sm font-semibold text-gray-900">92%</span>
                    </div>
                    <div className="w-full h-8 rounded-md bg-gray-100 overflow-hidden mt-3">
                      <div className="h-full rounded-md" style={{ width: "92%", backgroundColor: COLORS.light }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-700 leading-relaxed space-y-4">
                <p>
                  We believe these tools will help you make more informed
                  financial decisions and achieve your financial goals more
                  efficiently. To get started, simply log in to your
                  dashboard, and you'll find everything set up under the
                  'Budgeting' section.
                </p>
                <p>
                  As always, we're here to support you on your financial
                  journey. If you have questions or need assistance getting
                  started, don't hesitate to reach out to our support team.
                </p>
                <p>
                  Happy budgeting!
                  <br />
                  Best,
                  <br />
                  The Coinest Team
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-0.5 shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Inbox;