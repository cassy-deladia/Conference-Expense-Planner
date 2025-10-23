
import type { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center mx-20 mb-6">
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 pb-2 w-full text-center">
        {children}
      </h3>
    </div>
  );
}
