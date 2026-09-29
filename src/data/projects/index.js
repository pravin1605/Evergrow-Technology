import gymWebsite01 from "./gymWebsite01";
import gymWebsite02 from "./gymWebsite02";
import hospitalDemo from "./hospitalDemo";
import kindergartenDemo1 from "./kindergartenDemo1";
import kindergartenDemo2 from "./kindergartenDemo2";


import restaurantDemo from "./restaurantDemo";


import kharchaManager from "./kharchaManager";

import kidsgames from "./kidsgames";

import classhub from "./classhub";
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
  kharchaManager,
  kidsgames,
  classhub
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
  kharchaManager ,
  kidsgames,  
  classhub
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