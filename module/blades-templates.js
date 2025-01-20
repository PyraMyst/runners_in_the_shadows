/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [

    // Actor Sheet Partials
    "systems/runners_in_the_shadows/templates/parts/coins.html",
    "systems/runners_in_the_shadows/templates/parts/attributes.html",
    "systems/runners_in_the_shadows/templates/parts/turf-list.html",
    "systems/runners_in_the_shadows/templates/parts/cohort-block.html",
    "systems/runners_in_the_shadows/templates/parts/factions.html",
    "systems/runners_in_the_shadows/templates/parts/active-effects.html",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
