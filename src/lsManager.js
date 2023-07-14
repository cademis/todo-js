import { events as pubsub } from "./pubsub";

const LOCAL_STORAGE_AREAS_KEY = "areas.lists";
const LOCAL_STORAGE_PROJECTS_KEY = "projects.lists";
let areas;

function areaFactory(areaId, description) {
  const allAreas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY));

  let slug = `${description.split(" ").join("-")}`.toLowerCase();

  let uniqueSlug = `${areaId}-${description
    .split(" ")
    .join("-")}`.toLowerCase();

  // check if the uniqueSlug already exists in allAreas
  let existing = allAreas.find((area) => area.uniqueSlug === uniqueSlug);

  // if uniqueSlugalready exists, add a postfix to make it unique
  if (existing) {
    let postfix = 1;
    while (
      allAreas.find((area) => area.uniqueSlug === uniqueSlug + "-" + postfix)
    ) {
      postfix++;
    }
    uniqueSlug += "-" + postfix;
  }

  return {
    areaId,
    description,
    pinned: false,
    slug,
    uniqueSlug,
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

  projects.sort((a, b) => (a.projectId > b.projectId ? 1 : -1));

  return projects;
};

const pubsubListener = (() => {
  pubsub.on("CheckboxChanged", handleCheckboxChange);
})();

// function handleCheckboxChange(obj) {
//   console.log(obj);
//   if (obj.checked) {
//     enablePin(obj.id);
//   } else {
//     disablePin(obj.id)
//   }
// }

// const enablePin = (id) => {
//   let allAreas = getAreas();
//   allAreas.forEach((item) => {
//     if (item.uniqueSlug === id) console.log("match");
//   });
// };

// const disablePin = (id) {
//   let allAreas = getAreas();
//   allAreas.forEach((item) => {
//     if (item.uniqueSlug === id) console.log("match");
//   });
// }

// Local storage clean up function

(function () {
  let allAreas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY));
  allAreas.forEach((element) => {
    areaFactory(element.areaId, element.description);
  });
  console.log(allAreas);
  // localStorage.setItem(LOCAL_STORAGE_AREAS_KEY, JSON.stringify(allAreas)); // WARNING - only uncomment if allAreas returns desired results
})();
