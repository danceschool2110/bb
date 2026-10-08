import type { MemoryPhoto, MetricCardData, DailyEnergyPoint, ColleagueTrait } from '../types';

export const colleagueProfile = {
  name: "Cô Bạn Đồng Nghiệp Đáng Yêu",
  nickname: "Mảnh Ghép Rực Rỡ Của Cả Phòng",
  department: "Đại Gia Đình Công Ty",
  favoriteHobby: "Đam mê khám phá & gắn kết",
  favoriteColor: "Xanh dương pastel ngọt ngào",
  quote: "Cảm ơn vì thanh xuân này đã có những người đồng nghiệp tuyệt vời như mọi người!",
};

export const initialPhotos: MemoryPhoto[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    title: "Ngày đầu tiên bước chân vào công ty",
    tag: "Tập 1: Bỡ Ngỡ",
    description: "Khuôn mặt còn bẽn lẽn ngại ngùng, chưa hề hay biết nơi đây sẽ trở thành ngôi nhà thứ hai với bao nhiêu kỷ niệm đáng nhớ."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    title: "Những buổi họp căng thẳng nhưng đầy tiếng cười",
    tag: "Tập 2: Sát Cánh",
    description: "Dù công việc có áp lực đến đâu, chỉ cần nhìn thấy nụ cười và những câu bông đùa dí dỏm là cả phòng lại thấy nhẹ nhõm."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    title: "Khoảnh khắc giải cứu deadline ngoạn mục",
    tag: "Tập 3: Gánh Team",
    description: "Một pha hỗ trợ đồng đội xuất thần, xử lý task nhanh gọn lẹ khiến anh em trong phòng ai nấy đều thán phục."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1556742049-0a67c5520a02?auto=format&fit=crop&w=800&q=80",
    title: "Những chiều trà sữa và cà phê tiếp sức",
    tag: "Tập 4: Tiếp Năng Lượng",
    description: "Cứ 15h chiều là cả phòng lại rôm rả tiếng gọi order đồ uống, những phút giây giải lao tuy ngắn ngủi nhưng gắn kết vô cùng."
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    title: "Nụ cười rạng rỡ làm sáng bừng cả phòng",
    tag: "Tập 5: Tỏa Sáng",
    description: "Luôn mang đến bầu không khí tích cực, dễ mến và sự ấm áp cho bất kỳ ai có dịp làm việc chung."
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    title: "Bữa tiệc liên hoan no say cùng anh em",
    tag: "Tập 6: Kỷ Niệm",
    description: "Cùng nhau ăn mừng dự án thành công, cùng nâng ly chúc mừng những bước tiến mới và chia sẻ những câu chuyện đời thường."
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    title: "Năng động và tràn đầy nhiệt huyết",
    tag: "Tập 7: Nhiệt Huyết",
    description: "Làm hết sức, chơi hết mình. Trong mọi hoạt động của công ty bạn đều tham gia nhiệt tình với tinh thần tuyệt vời nhất."
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    title: "Tình đồng chí kề vai sát cánh",
    tag: "Tập 8: Tri Kỷ",
    description: "Không chỉ là đồng nghiệp hỗ trợ nhau trong công việc, mà đã trở thành những người bạn thực sự luôn sẵn sàng lắng nghe."
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    title: "Bức ảnh kỷ niệm thần thái ngút ngàn",
    tag: "Tập 9: Xinh Đẹp",
    description: "Góc làm việc quen thuộc lưu giữ hình ảnh một cô gái chăm chỉ, duyên dáng và luôn tận tâm với từng công việc được giao."
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    title: "Mãi là một phần thanh xuân của nhau",
    tag: "Tập 10: Yêu Thương",
    description: "Dù sau này mỗi người một hướng đi mới, công ty và team vẫn luôn là nơi chào đón bạn trở về thăm bất cứ lúc nào."
  }
];

export const metricsData: MetricCardData[] = [
  {
    title: "Dự Án Đã Sát Cánh",
    value: "99+",
    subtitle: "Luôn kề vai sát cánh và hoàn thành tốt"
  },
  {
    title: "Ly Cà Phê & Trà Sữa",
    value: "365+",
    subtitle: "Những giờ xả stress rôm rả cùng đồng đội"
  },
  {
    title: "Nụ Cười & Kỷ Niệm Đẹp",
    value: "1000+",
    subtitle: "Những phút giây vô giá lưu giữ mãi"
  },
  {
    title: "Chỉ Số Yêu Quý Của Cả Phòng",
    value: "100%",
    subtitle: "Vị trí đặc biệt trong lòng mọi người"
  }
];

export const energyChartData: DailyEnergyPoint[] = [
  { time: "08:30", workEnergy: 40, badmintonEnergy: 30 },
  { time: "10:00", workEnergy: 80, badmintonEnergy: 45 },
  { time: "12:00", workEnergy: 30, badmintonEnergy: 95 },
  { time: "14:30", workEnergy: 70, badmintonEnergy: 55 },
  { time: "16:00", workEnergy: 90, badmintonEnergy: 85 },
  { time: "17:30", workEnergy: 50, badmintonEnergy: 100 },
  { time: "19:00", workEnergy: 20, badmintonEnergy: 120 },
];

export const colleagueTraits: ColleagueTrait[] = [
  { trait: "Gánh Deadline", score: 98 },
  { trait: "Năng Lượng Tích Cực", score: 100 },
  { trait: "Nhiệt Tình Hỗ Trợ", score: 100 },
  { trait: "Hài Hước & Dễ Mến", score: 100 },
  { trait: "Độ Đáng Tin Cậy", score: 100 },
];

export const funnyHabits = [
  {
    tag: "Cửa Miệng",
    text: "'Mọi người ơi uống gì không em order chung cho đỡ tiền ship nè!'",
  },
  {
    tag: "Gánh Task",
    text: "Miệng kêu 'Task này khó ghê' nhưng lát sau đã làm xong mượt mà.",
  },
  {
    tag: "Giờ Nghỉ Trưa",
    text: "Chuyên gia gợi ý những quán ăn ngon bổ rẻ cho cả phòng cùng đi ăn.",
  },
  {
    tag: "Nụ Cười",
    text: "Mỗi lần cả phòng stress vì công việc là lại có những câu chuyện làm mọi người phì cười.",
  }
];

export const farewellMessage = {
  greeting: "Gửi toàn thể anh chị em và bạn bè đồng nghiệp thân thương,",
  body: [
    "Thời gian cùng làm việc dưới một mái nhà công ty tuy không quá dài nhưng đã để lại cho mình vô vàn kỷ niệm đẹp đẽ và quý báu.",
    "Cảm ơn mọi người đã luôn hướng dẫn, giúp đỡ tận tình từ những ngày đầu bỡ ngỡ bước chân vào công ty, và luôn kề vai sát cánh qua từng dự án.",
    "Cảm ơn những tiếng cười rôm rả mỗi giờ nghỉ trưa, những cốc trà sữa san sẻ lúc xế chiều, và những lời động viên chân tình mỗi khi công việc gặp khó khăn.",
    "Dù bước sang chặng đường mới với những thử thách mới, mình sẽ luôn nhớ về từng gương mặt thân quen, từng góc bàn làm việc và tình cảm ấm áp của tất cả mọi người.",
    "Chúc công ty chúng ta ngày càng phát triển vững mạnh, chúc tất cả anh chị em đồng nghiệp luôn dồi dào sức khỏe, hạnh phúc và gặt hái thật nhiều thành công rực rỡ!"
  ],
  signOff: "Trân trọng và biết ơn tất cả mọi người rất nhiều!",
  sender: "Từ cô bạn đồng nghiệp luôn yêu quý tập thể chúng ta"
};
