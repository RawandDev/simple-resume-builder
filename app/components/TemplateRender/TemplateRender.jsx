import CalmTemplate from "../Templates/CalmTemplate";
import InitialTemplate from "../Templates/InitialTemplate";
import ModernTemplate from "../Templates/ModernTemplate";

export const MAP_TEMPLATE_KEYS_TO_JSX = {
  INITIAL_TEMPLATE: { component: InitialTemplate, name: "Classic" },
  MODERN_TEMPLATE: { component: ModernTemplate, name: "Modern" },
  CALM_TEMPLATE: { component: CalmTemplate, name: "Calm" },
};

function TemplateRenderer({
  selectedTemplate,
  userDetails,
  projects,
  skills,
  socials,
  educations,
  selectedImage,
  templateRef,
  border,
}) {
  const TemplateComponent =
    MAP_TEMPLATE_KEYS_TO_JSX[selectedTemplate].component;

  return (
    <div ref={templateRef}>
      {TemplateComponent && (
        <TemplateComponent
          userDetails={userDetails}
          projects={projects}
          skills={skills}
          socials={socials}
          educations={educations}
          selectedImage={selectedImage}
          border={border}
        />
      )}
    </div>
  );
}

export default TemplateRenderer;
