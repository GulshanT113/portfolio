// import React, { useState, useEffect } from "react";

// const TypingEffect = () => {
//   const texts = ["Frontend Developer", "React Developer", "Software Developer"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change text every 2 seconds

//     return () => clearInterval(interval); // Clean up on unmount
//   }, []);

//   return <h1 className="text-gray-800">{texts[index]}</h1>;
// };

// export default TypingEffect;

import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const texts = ["Frontend Developer", "React Developer", "Software Developer"];

  const [index, setIndex] = useState(0); // Which text
  const [subIndex, setSubIndex] = useState(0); // Which letter
  const [reverse, setReverse] = useState(false); // Typing or deleting

  useEffect(() => {
    if (index === texts.length) {
      setIndex(0);
    }

    const timeout = setTimeout(
      () => {
        if (!reverse) {
          if (subIndex < texts[index].length) {
            setSubIndex(subIndex + 1);
          } else {
            setReverse(true);
          }
        } else {
          if (subIndex > 0) {
            setSubIndex(subIndex - 1);
          } else {
            setReverse(false);
            setIndex((index + 1) % texts.length);
          }
        }
      },
      reverse ? 50 : 150
    ); // Typing speed slower, delete speed faster

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <h1 className="text-4xl font-bold text-orange-400">
      {`${texts[index].substring(0, subIndex)}|`}
    </h1>
  );
};

export default TypingEffect;
