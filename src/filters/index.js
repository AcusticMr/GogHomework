import Vue from 'vue'

/**
 * value filter
 *
 *  changes value in cents to dollars
 *  @param {Number} value - 9820
 *  @output {Number} 98.20 $
 */

import price from '@/filters/price';

Vue.filter("price", price);
