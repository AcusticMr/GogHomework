// State object
const state = {
  products: [
    {
      id: '1',
      title: "ODDWORLD: STRANGER'S WRATH",
      imgUrl: 'https://via.placeholder.com/300x180',
      cartImgUrl: 'https://via.placeholder.com/150x100',
      redirectUrl: '/game/oddworld_strangers_wrath',
      state: 'available',
      baseValue: 1999,
      discountedValue: 999,
      discountPercentage: 50
    },
    {
      id: '2',
      title: "CHAOS ON DEPONIA",
      imgUrl: 'https://via.placeholder.com/300x180',
      cartImgUrl: 'https://via.placeholder.com/150x100',
      redirectUrl: '/game/chaos_on_deponia',
      state: 'owned',
      baseValue: 399,
      discountedValue: null,
      discountPercentage: null
    },
    {
      id: '3',
      title: "THE SETTLERS 2: GOLD EDITION",
      imgUrl: 'https://via.placeholder.com/300x180',
      cartImgUrl: 'https://via.placeholder.com/150x100',
      redirectUrl: '/game/the_settlers_2_gold_edition',
      state: 'available',
      baseValue: 599,
      discountedValue: null,
      discountPercentage: null
    },
    {
      id: '4',
      title: "NEVERWINTER NIGHTS",
      imgUrl: 'https://via.placeholder.com/300x180',
      cartImgUrl: 'https://via.placeholder.com/150x100',
      redirectUrl: '/game/neverwinter_nights',
      state: 'available',
      baseValue: 999,
      discountedValue: 499,
      discountPercentage: 50
    },
    {
      id: '5',
      title: "ASSASSIN'S CREED: DIRECTOR'S CUT",
      imgUrl: 'https://via.placeholder.com/300x180',
      cartImgUrl: 'https://via.placeholder.com/150x100',
      redirectUrl: '/game/assassins_creed_directors_cut',
      state: 'available',
      baseValue: 999,
      discountedValue: null,
      discountPercentage: null
    }
  ],
  banner: {
    imgUrl: 'https://images.gog-statics.com/5bc58089e14771de0c1b872c529c8b8b150b87fe28c7e4db1856389526849bb3.jpg',
    redirectUrl: '/game/witcher_adventure_game'
  },
  cart: []
}

// Getter functions
const getters = {
}

// Mutations
const mutations = {
  changeProducts(state, products) {
    state.products = products;
  },
  
  clearCart(state) {
    state.cart = [];
    
    state.products.forEach((item, index) => {
      if(item.state === 'in_cart') {
        state.products[index].state = 'available'
      }
    })
  },
  
  addToCart(state, item) {
    if (state.cart.findIndex(e => e.id === item.id) === -1) {
      state.cart.push(item);
      state.products[state.products.findIndex(e => e.id === item.id)].state = 'in_cart';
    }
  },
  
  removeFromCart(state, item) {
    const itemCartIndex = state.cart.findIndex(e => e.id === item.id);
    
    if (state.cart.findIndex(e => e.id === item.id) !== -1) {
      state.cart.splice(itemCartIndex, 1);
      state.products[state.products.findIndex(e => e.id === item.id)].state = 'available';
    }
  }
}

// Actions
const actions = {
  // on first page load request to fetch data from backend
  // initialFetch({ commit }) {
  //   //fetch items request here
  //
  //   commit('changeProducts', {});
  // },
  
  clearCart({ commit }) {
    commit('clearCart');
  },
  
  addItem({ commit }, item) {
    commit('addToCart', item);
  },
  
  removeFromCart({ commit }, item) {
    commit('removeFromCart', item);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
