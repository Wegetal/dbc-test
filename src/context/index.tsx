import * as Auth from "./Auth";

/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

/**
 * in case its needed multiple contexts, put in hierarchical order (from higher to lower)
 * the calling of the providers components are done in a iterator function, this way is not needed a new call on each new context
 * @author Davi Wegner
 * @created 27-06-2021
 */
const Contexts = [Auth];

export { Auth };

export default Contexts;
