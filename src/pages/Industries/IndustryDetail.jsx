import { useParams, Navigate } from "react-router-dom";

import industries
  from "../../data/industries";

import IndustryTemplate
  from "../../templates/IndustryTemplate/IndustryTemplate";


function IndustryDetail() {

  const { industrySlug } = useParams();


  const industry = industries.find(
    (item) => item.slug === industrySlug
  );


  if (!industry) {

    return (
      <Navigate
        to="/industries"
        replace
      />
    );

  }


  return (
    <IndustryTemplate
      industry={industry}
    />
  );

}


export default IndustryDetail;