const LOCAL_STORAGE_AREAS_KEY = "areas.lists";
const LOCAL_STORAGE_PROJECTS_KEY = "projects.lists";
let areas;

function areaFactory(areaId, description) {
  return {
    areaId,
    description,
  };
}

export const getAreas = () => {
  return (areas =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY)) || []);
};

export function addArea(description) {
  const retrievedAreas = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_AREAS_KEY)
  );
  const newArea = areaFactory("P5", description);

  const updatedAreas = [...retrievedAreas, newArea];

  // console.log(`${JSON.stringify(updatedAreas)} created via addArea() function`);
  localStorage.setItem(LOCAL_STORAGE_AREAS_KEY, JSON.stringify(updatedAreas));
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY)));
}

export const getProjects = () => {
  const projects = [
    {
      projectId: "H6-001",
      description: "this is the first project",
      created: "202307120925",
    },
    {
      projectId: "H6-002",
      description: "this is the second project",
      created: "202307120926",
    },
    {
      projectId: "P2-001",
      description: "this is another random project",
      created: "202307120927",
    },
    {
      projectId: "H9-001",
      description: "this is the third project",
      created: "202307120928",
    },
    {
      projectId: "P5-001",
      description: "this is a new project",
      created: "202307120929",
    },
    {
      projectId: "H8-001",
      description: "this is a test project",
      created: "202307120930",
    },
    {
      projectId: "P3-001",
      description: "this is a sample project",
      created: "202307120931",
    },
    {
      projectId: "H7-001",
      description: "this is an experimental project",
      created: "202307120932",
    },
    {
      projectId: "P4-001",
      description: "this is a demo project",
      created: "202307120933",
    },
    {
      projectId: "H10-001",
      description: "this is a new addition project",
      created: "202307120934",
    },
    {
      projectId: "P6-001",
      description: "this is a development project",
      created: "202307120935",
    },
  ];

  projects.sort((a, b) => a.projectId.localeCompare(b.projectId));

  return projects;
};
