import { Interface_PageTitle } from "@/interface";
import { useRouter } from "next/navigation";
import React from "react";
import ARROW from "./../../assets/svg/arrow-right.svg";
import {
  Breadcrumb,
  BreadcrumbArrow,
  BreadcrumbWrapper,
  Title,
  Wrapper,
} from "./_pageTitle";

function PageTitle({
  breadcrumb = [],
  showBreadcrumb = true,
  title = "Title",
}: Interface_PageTitle) {
  const router = useRouter();

  const handleBreadcrumbClick = (val: string) => {
    router.push(val);
  };

  return (
    <Wrapper>
      {showBreadcrumb && breadcrumb.length > 0 && (
        <BreadcrumbWrapper>
          {breadcrumb.map(({ label, value }, idx) => {
            return (
              <React.Fragment key={idx}>
                <Breadcrumb onClick={() => handleBreadcrumbClick(value)}>
                  {label}
                </Breadcrumb>
                {idx !== breadcrumb.length - 1 && (
                  <BreadcrumbArrow src={ARROW} />
                )}
              </React.Fragment>
            );
          })}
        </BreadcrumbWrapper>
      )}
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default PageTitle;
