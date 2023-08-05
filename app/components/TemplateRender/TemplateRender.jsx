import InitialTemplate from "../Templates/InitialTemplate";
import ModernTemplate from "../Templates/ModernTemplate";

const MAP_TEMPLATES_TO_JSX = {
  INITIAL_TEMPLATE: InitialTemplate,
  MODERN_TEMPLATE: ModernTemplate,
};

function TemplateRenderer({
  selectedTemplate,
  userDetails,
  projects,
  skills,
  socials,
}) {
  const TemplateComponent = MAP_TEMPLATES_TO_JSX[selectedTemplate];

  return (
    <div>
      {TemplateComponent && (
        <TemplateComponent
          userDetails={userDetails}
          projects={projects}
          skills={skills}
          socials={socials}
        />
      )}
    </div>
  );
}

export default TemplateRenderer;