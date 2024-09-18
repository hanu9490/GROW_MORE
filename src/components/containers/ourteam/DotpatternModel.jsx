"use client";

import { cn } from "../../../lib/utils";
import DotPattern from "../../../magicui/DotpatternRaw";

// Define the HOC to wrap components with the DotPatternModel layout
const withDotPatternModel = (WrappedComponent) => {
  return function DotPatternModel(props) {
    return (
      <div className="relative flex w-full flex-col items-center justify-start overflow-hidden rounded-lg border bg-background md:shadow-xl">
        {/* DotPattern in the background */}
        <DotPattern
          className={cn(
            "absolute inset-0 z-0 w-full h-full [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />

        {/* The component passed into the HOC */}
        <div className="relative z-1 w-full h-auto py-8 md:py-12">
          {/* Rendering the wrapped component with passed props */}
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

export default withDotPatternModel;

// "use client";

// import { cn } from "../../../lib/utils";
// import DotPattern from "../../../magicui/DotpatternRaw";

// export const DotPatternModel = ({ component }) => {
//   return (
//     <div className="relative flex w-full flex-col items-center justify-start overflow-hidden rounded-lg border bg-background md:shadow-xl">
//       {/* DotPattern in the background */}
//       <DotPattern
//         className={cn(
//           "absolute inset-0 z-0 w-full h-full [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
//         )}
//       />

//       {/* OurTeam content on top of the DotPattern */}
//       <div className="relative z-1 w-full h-auto py-8 md:py-12">
//         {component}
//       </div>
//     </div>
//   );
// };
