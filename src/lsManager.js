import { events as pubsub } from "./pubsub";

const LOCAL_STORAGE_AREAS_KEY = "areas.lists";
const LOCAL_STORAGE_PROJECTS_KEY = "projects.lists";
let areas;

// areaFactory
function areaFactory(areaId, description) {
  const allAreas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY));

  let slug = `${description.split(" ").join("-")}`.toLowerCase();

  // set default value of uniqueSlug
  let uniqueSlug = `${areaId}-${description
    .split(" ")
    .join("-")}`.toLowerCase();

  // check if the new uniqueSlug already exists in allAreas
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
  console.log(`description = ${description}`);
  const retrievedAreas = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_AREAS_KEY)
  );

  let splitDescription = description.split("/");
  let areaCodePrefix = splitDescription[0];
  let slug = splitDescription[1];

  const areaCodesWithSamePrefix = retrievedAreas
    .map(({ areaId }) => {
      const [retrievedAreaCodePrefix, retrievedAreaCodeSequentialNumber] =
        areaId.split(/(\d+)/).filter(Boolean);
      return {
        retrievedAreaCodePrefix,
        retrievedAreaCodeSequentialNumber: +retrievedAreaCodeSequentialNumber,
      };
    })
    .filter(
      ({ retrievedAreaCodePrefix }) =>
        areaCodePrefix === retrievedAreaCodePrefix
    );

  let maxSequentialNumber = Math.max(
    ...areaCodesWithSamePrefix.map(
      ({ retrievedAreaCodeSequentialNumber }) =>
        retrievedAreaCodeSequentialNumber
    ),
    0
  );

  let newAreaCodeSequentialNumber = maxSequentialNumber + 1;
  let newAreaCode = `${areaCodePrefix}${newAreaCodeSequentialNumber}`;
  let newArea = areaFactory(newAreaCode, slug);

  const updatedAreas = [...retrievedAreas, newArea];

  localStorage.setItem(LOCAL_STORAGE_AREAS_KEY, JSON.stringify(updatedAreas));
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY)));
}

export const getProjects = () => {
  const projects = [
    {
      area: "h6",
      projectId: "H6-001",
      description: "this is the first project",
      created: "202307120925",
    },
    {
      area: "h6",
      projectId: "H6-002",
      description: "this is the second project",
      created: "202307120926",
    },
    {
      area: "p2",
      projectId: "P2-001",
      description: "this is another random project",
      created: "202307120927",
    },
    {
      area: "h9",
      projectId: "H9-001",
      description: "this is the third project",
      created: "202307120928",
    },
    {
      area: "p5",
      projectId: "P5-001",
      description: "this is a new project",
      created: "202307120929",
    },
    {
      area: "h8",
      projectId: "H8-001",
      description: "this is a test project",
      created: "202307120930",
    },
    {
      area: "p3",
      projectId: "P3-001",
      description: "this is a sample project",
      created: "202307120931",
    },
    {
      area: "h7",
      projectId: "H7-001",
      description: "this is an experimental project",
      created: "202307120932",
    },
    {
      area: "p4",
      projectId: "P4-001",
      description: "this is a demo project",
      created: "202307120933",
    },
    {
      area: "h10",
      projectId: "H10-001",
      description: "this is a new addition project",
      created: "202307120934",
    },
    {
      area: "p6",
      projectId: "P6-001",
      description: "this is a development project",
      created: "202307120935",
    },
  ];

  projects.sort((a, b) => (a.projectId > b.projectId ? 1 : -1));

  return projects;
};

const handleCheckboxChange = (event) => {
  console.log(
    `checkbox has changed status: ${event.id} is now checked: ${event.checked}`
  );
  let allAreas = getAreas();
  const modifiedAreas = allAreas.map((area) =>
    area.uniqueSlug === event.id ? { ...area, pinned: event.checked } : area
  );

  let isMatched = modifiedAreas.some((area) => area.uniqueSlug === event.id);
  if (isMatched) {
    console.log("found a match!");
  } else {
    console.log(`error no match`);
  }

  // console.log(modifiedAreas);
  localStorage.setItem(LOCAL_STORAGE_AREAS_KEY, JSON.stringify(modifiedAreas));
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY)));
};

pubsub.on("CheckboxChanged", handleCheckboxChange);

// Local storage clean up function. Use this after modifying the areaFactory function
// WARNING - only uncomment last line if allAreas returns desired results

(function () {
  let allAreas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AREAS_KEY));
  allAreas = allAreas.map((element) => {
    return areaFactory(element.areaId, element.description);
  });
  // console.log(allAreas);
  // localStorage.setItem(LOCAL_STORAGE_AREAS_KEY, JSON.stringify(allAreas));
})();
