type HomeProps = {
  onClick: () => void;
}

export default function Home({ onClick }: HomeProps) {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen px-20 gap-5 bg-white">

        <div className="flex-1 flex items-center justify-center flex-col gap-5 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 font-sans text-center">
            Aurora Event Solutions
          </h1>

          <p className="text-2xl text-gray-700 font-medium text-center">
            Where ideas become unforgettable experiences.
          </p>

          <button
            className="bg-black text-white font-semibold text-xl px-8 py-3 rounded-full shadow hover:bg-gray-800 transition duration-200"
            onClick={onClick}
          >
            Start Planning
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center flex-col gap-3 font-medium text-sm text-justify p-8 text-gray-800 relative z-10 bg-gray-100 rounded-2xl shadow">
          <p>
            Aurora Event Solutions simplifies every step of event planning. From small meetings to international conferences, we make coordination effortless and professional. Focus on your vision—we’ll handle the rest.
          </p>
          <p>
            Manage schedules, vendors, and budgets in one unified space. Real-time collaboration tools ensure your team stays in sync while our analytics give you clear insight into progress and spending.
          </p>
          <p>
            Build events that inspire. With Aurora, you can plan, execute, and celebrate—confident that every detail is under control.
          </p>
        </div>
      </div>
    </>
  )
}
