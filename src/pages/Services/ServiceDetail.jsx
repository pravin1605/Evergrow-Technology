import { useParams } from "react-router-dom";

import ServiceTemplate
  from "../../templates/ServiceTemplate/ServiceTemplate";

import { allServices }
  from "../../data/services";

import NotFound
  from "../NotFound/NotFound";

import "./ServiceDetail.css";


/* =========================================================
   SERVICE DETAIL
========================================================= */

function ServiceDetail() {

  const { serviceSlug } = useParams();


  /* =======================================================
     FIND SERVICE
  ======================================================= */

  const service = allServices.find(
    (item) => item.slug === serviceSlug
  );


  /* =======================================================
     SERVICE NOT FOUND
  ======================================================= */

  if (!service) {

    return (
      <NotFound />
    );

  }


  /* =======================================================
     SERVICE PAGE
  ======================================================= */

  return (

    <main className="service-detail-page">

      <ServiceTemplate
        service={service}
      />

    </main>

  );
}


export default ServiceDetail;