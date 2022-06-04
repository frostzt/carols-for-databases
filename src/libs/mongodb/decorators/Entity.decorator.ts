/**
 * @author frostzt
 *
 * Entity contains things related to the @Entity decorator for the MongoDB
 * entity.
 */

import mongoose from "mongoose";

/**
 * Converts a class into mongoose model.
 * @param constructor the Class that is to be converted to an entity
 */
function Entity<T extends { new (...args: any[]): {} }>(constructor: T): void {}
