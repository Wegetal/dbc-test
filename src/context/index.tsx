import * as Auth from "./Auth";
import * as Notification from "./Notification";
/**
 * @author Davi Wegner
 * @email davi@wegn.dev
 * @created 26-06-2021
 */

/**
 * in case its needed multiple contexts, put in hierarchical order (from lower to higher)
 * the calling of the providers components are done in a iterator function, this way is not needed a new call on each new context
 * @author Davi Wegner
 * @created 27-06-2021
 */
const Contexts = [Auth, Notification];

export { Auth, Notification };

export default Contexts;
