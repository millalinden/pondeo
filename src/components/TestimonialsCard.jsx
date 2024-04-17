export default function TestimonialsCard() {
  return (
    <div className="bg-slate-300 w-80 h-52 rounded-lg p-6">
      <div className="flex gap-4">
        <div className="h-10 w-10 bg-gray-100 rounded-full"></div>
        <div>
          <p className="text-slate-600 font-bold">Viezh Robert</p>
          <p className="text-xs text-slate-600">Warzaw, Poland</p>
        </div>
      </div>
      <div className="py-4 text-slate-600">
        "Wow, I am very happy to use this service, it turned out to be more than
        my expectations, and so far there have been no problems. Pondeo always
        the best."
      </div>
    </div>
  );
}
