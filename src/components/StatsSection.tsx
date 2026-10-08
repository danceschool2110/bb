import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { metricsData, energyChartData, funnyHabits } from '../data/tributeData';

export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="border-y border-sky-100 bg-sky-50/50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700 uppercase tracking-wider">
            Nhật Ký Công Sở Thân Thương
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-800 sm:text-3xl">
            Sổ Kỷ Niệm & Những Điều Đáng Nhớ
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Tổng kết những khoảnh khắc vui vẻ, những thói quen đáng yêu và chặng đường đồng hành cùng cả team.
          </p>
        </div>

        <div id="habits" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {funnyHabits.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute top-0 right-4 h-2 w-12 rounded-b-md bg-sky-200/80" />
              <div className="inline-block rounded-lg bg-sky-50 px-2.5 py-0.5 text-xs font-bold text-sky-700">
                {item.tag}
              </div>
              <p className="mt-3 text-xs font-medium text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {metricsData.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-sky-100 bg-white p-5 text-center shadow-sm transition-all hover:border-sky-300 hover:shadow-md"
            >
              <div className="text-3xl font-extrabold tracking-tight text-sky-600 sm:text-4xl">
                {metric.value}
              </div>
              <div className="mt-2 text-xs font-bold text-slate-700">
                {metric.title}
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                {metric.subtitle}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4 gap-2">
            <div>
              <h3 className="text-base font-bold text-slate-800">
                Biểu Đồ Nhịp Sống Công Sở Trong Ngày
              </h3>
              <p className="text-xs text-slate-400">
                Sáng tập trung xử lý công việc, chiều rôm rả nạp năng lượng và gắn kết cùng cả phòng!
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xs font-medium">
              <span className="flex items-center text-blue-600">
                <span className="mr-1.5 h-2.5 w-2.5 rounded-full bg-blue-500" />
                Công việc
              </span>
              <span className="flex items-center text-sky-500">
                <span className="mr-1.5 h-2.5 w-2.5 rounded-full bg-sky-400" />
                Gắn kết cùng team
              </span>
            </div>
          </div>

          <div className="mt-6 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={energyChartData}>
                <defs>
                  <linearGradient id="workGradLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="badmintonGradLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#94A3B8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={12} domain={[0, 130]} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#BAE6FD',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(2, 132, 199, 0.08)',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="workEnergy"
                  name="Công việc"
                  stroke="#3B82F6"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#workGradLight)"
                />
                <Area
                  type="monotone"
                  dataKey="badmintonEnergy"
                  name="Gắn kết cùng team"
                  stroke="#0EA5E9"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#badmintonGradLight)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
