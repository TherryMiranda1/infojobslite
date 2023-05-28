import { useCallback, useEffect, useRef } from "react";
import { IntersectionTrigerStyled } from "./IntersectionTrigger.styled";
import { PuffLoader } from "react-spinners";

interface Props {
  onIntercept: () => void;
  isLoading: boolean;
}

export const IntersectionTrigger = ({
  onIntercept,
  isLoading,
}: Props): JSX.Element => {
  const triggerRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 0,
  };

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target?.isIntersecting) {
        onIntercept();
      }
    },
    [onIntercept]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    triggerRef.current && observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <IntersectionTrigerStyled>
      {isLoading ? <PuffLoader /> : <div ref={triggerRef} />}
    </IntersectionTrigerStyled>
  );
};
