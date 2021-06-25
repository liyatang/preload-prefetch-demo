import React from 'react';

const A = () => {
  const [Com, setCom] = React.useState(null);
  React.useEffect(() => {
    setTimeout(() => {
      setCom(React.lazy(() => import(/* webpackPreload: true *//* webpackChunkName: 'b' */'./b.js')));
    }, 2000);
  }, []);

  console.log(Com);
  return (
    <div>aa
      {Com && <Com/>}
    </div>
  );
};

export default A;
