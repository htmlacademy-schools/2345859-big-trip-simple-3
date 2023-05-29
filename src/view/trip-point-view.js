import {View} from './view.js';

const createTripPointTemplate = () => '';

/**
 * Trip point view
 *
 * @class TripPointView
 * @extends {View}
 */

export default class TripPointView extends View{

  constructor() {
    super(createTripPointTemplate());
  }

}