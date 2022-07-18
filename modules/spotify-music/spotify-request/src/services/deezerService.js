export const searchTracks = async (q) => {
  const queyParams = new URLSearchParams({
    q
  });

  const response = await new Promise(resolve => (
    DZ.api(`/search/track?${queyParams.toString()}`, 
      response => resolve(response))
  ));
 
  return response;
};