
// components helper function
export function getTopArticles (state, num) {
  return Object.keys(state.articles.byId).reduce(function (acc, id) {
    return acc.concat(state.articles.byId[id]);
  }, []).sort(function (a, b) {
    return b.votes - a.votes;
  }).slice(0, num); 
}

export function getTopic (topic) {
    switch (topic) {
        case 'football':
        case 'cooking':
        case 'coding':
            return topic;
        default:
            return;
        }
}

export function fetchTopicArticles (articles, belong) {
  return Object.keys(articles).reduce(function (acc, id) {
    return acc.concat(articles[id]);
  }, []).filter(function (topic) {
    return topic.belongs_to === belong;
  });
}

export function getTopComments (state, num) {
  return Object.keys(state.comments.byId).reduce(function (acc, id) {
    return acc.concat(state.comments.byId[id]);
  }, []).sort(function (a, b) {
    return b.votes - a.votes;
  }).slice(0, num); 
}

// reducer helper function
export function normaliseData (data) {
    return data.reduce(function (acc, item) {
        acc[item._id] = item;
        return acc; 
    }, {});
}