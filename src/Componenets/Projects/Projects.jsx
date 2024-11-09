import React from "react";
import ProjectBody from "./ProjectBody";
import image1 from "../../assets/images/logo.png";
import image2 from "../../assets/images/logo2.png";
import image3 from "../../assets/images/logo3.png";
import image4 from "../../assets/images/logo4.png";
import image5 from "../../assets/images/logo5.png";
import image6 from "../../assets/images/logo6.png";

const Projects = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 ">
      <ProjectBody
        image={image2}
        title="Dazzling"
        description="An E-commerce website"
        links={[
          { url: "https://dazzling-4b3ea.web.app/", label: "Main Site" },
          { url: "https://github.com/Khandaker20201125010/Dazzling-Client-Site-", label: "GitHub" }
        ]}
      />
      <ProjectBody
        image={image1}
        title="Hostel Blaze"
        description="A hostel meal website"
        links={[
          { url: "https://hostel-management-660de.web.app/", label: "Main Site" },
          { url: "https://github.com/Khandaker20201125010/Hostel-Blaze-Client", label: "GitHub" }
        ]}
      />
      <ProjectBody
        image={image3}
        title="Flame Food Restaurant"
        description="A restaurant website"
        links={[
          { url: "https://restaurant-management-we-208ee.web.app/", label: "Main Site" },
          { url: "https://github.com/Khandaker20201125010/Flame-Food-Restaurant-Client", label: "GitHub" }
        ]}
      />
      <ProjectBody
        image={image4}
        title="Dreamland Tourism"
        description="A tourism website"
        links={[
          { url: "https://dreamland-tourism.web.app/", label: "Main Site" },
          { url: "https://github.com/Khandaker20201125010/Dreamland-Tourism-Client", label: "GitHub" }
        ]}
      />
      <ProjectBody
        image={image5}
        title="Residential-Zones"
        description="A real estate website"
        links={[
          { url: "https://residential-zones.web.app/", label: "Main Site" },
          { url: "https://github.com/Khandaker20201125010/Residential-Zones", label: "GitHub" }
        ]}
      />
      <ProjectBody
        image={image6}
        title="Book Vibe"
        description="A book website"
        links={[
          { url: "https://6606f7b51ddf01e5d0c4b2cc--magnificent-cassata-4884e1.netlify.app/", label: "Main Site" },
          { url: "https://github.com/Khandaker20201125010/Book-Vibe", label: "GitHub" }
        ]}
      />
    </div>
  );
};

export default Projects;
