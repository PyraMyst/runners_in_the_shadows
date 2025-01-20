/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [

    // Actor Sheet Partials
    "systems/runnersintheshadows/templates/parts/coins.html",
    "systems/runnersintheshadows/templates/parts/attributes.html",
    "systems/runnersintheshadows/templates/parts/turf-list.html",
    "systems/runnersintheshadows/templates/parts/cohort-block.html",
    "systems/runnersintheshadows/templates/parts/factions.html",
    "systems/runnersintheshadows/templates/parts/active-effects.html",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
