import { Suspense } from "react";
import { Loading } from "shared";

export function withContainer(View, hook) {
  return (props) => {
    const hookProps = hook();
    return <View {...props} {...hookProps} />;
  };
}

export function withSuspense(View, FallBack) {
  return (props) => (
    <Suspense fallback={<Loading width={72} />}>
      <View {...props} />
    </Suspense>
  );
}
