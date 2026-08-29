import gymWebsite01 from "./gymWebsite01";
import gymWebsite02 from "./gymWebsite02";
import hospitalDemo from "./hospitalDemo";
import kindergartenDemo1 from "./kindergartenDemo1";
import kindergartenDemo2 from "./kindergartenDemo2";
import societyHub from "./societyHub";

import restaurantDemo from "./restaurantDemo";

/*
|--------------------------------------------------------------------------
| ALL PROJECTS
|--------------------------------------------------------------------------
*/

const projects = [
  gymWebsite01,
  gymWebsite02,
  hospitalDemo,
  kindergartenDemo1,
  kindergartenDemo2,
 restaurantDemo,
];

/*
|--------------------------------------------------------------------------
| NAMED EXPORTS
|--------------------------------------------------------------------------
*/

export {
  projects,
  gymWebsite01,
  gymWebsite02,
  hospitalDemo,
  kindergartenDemo1,
  kindergartenDemo2,
  restaurantDemo,
};

/*
|--------------------------------------------------------------------------
| ALL PROJECTS ALIAS
|--------------------------------------------------------------------------
|
| Used by Work.jsx and ProjectDetail.jsx
|
*/

export const allProjects = projects;

/*
|--------------------------------------------------------------------------
| DEFAULT EXPORT
|--------------------------------------------------------------------------
*/

export default projects;