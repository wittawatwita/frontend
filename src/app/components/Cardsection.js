import Image from 'next/image';

const PRODUCTS = [
  {
    id: 1,
    title: "หูฟังไร้สาย Noise Cancelling",
    description: "ตัดเสียงรบกวนได้ดีเยี่ยม แบตเตอรี่ใช้งานได้ยาวนาน 30 ชั่วโมง",
    price: "฿4,990",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    badge: "Hot"
  },
  {
    id: 2,
    title: "กล้อง Mirrorless 4K",
    description: "กล้องดิจิตอลความละเอียดสูง พร้อมเลนส์คิท 15-45mm",
    price: "฿25,900",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    badge: "Premium"
  },
  {
    id: 3,
    title: "นาฬิกาสมาร์ทวอทช์",
    description: "ติดตามการออกกำลังกาย วัดอัตราการเต้นของหัวใจ กันน้ำได้",
    price: "฿3,200",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    badge: "New"
  }
];

export default function Cardsection() {
  return (
    <section className="py-20 bg-slate-950 text-slate-100 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent sm:text-5xl">
            สินค้าแนะนำ
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-md mx-auto font-light">
            คัดสรรเทคโนโลยีชั้นนำและดีไซน์ที่โดดเด่นเพื่อคุณในเดือนนี้
          </p>
          <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group relative border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"
            >
              <div className="relative w-full h-56 bg-slate-950 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-slate-900/80 text-blue-400 border border-blue-500/30 backdrop-blur-sm">
                  {product.badge}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2 line-clamp-2 font-light leading-relaxed">
                  {product.description}
                </p>
                
                <div className="my-5 border-t border-slate-800/60" />

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">ราคาเริ่มต้น</span>
                    <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                  </div>
                  
                  <button className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-xl overflow-hidden transition-all duration-300 hover:bg-slate-100 active:scale-95 shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
                    เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
