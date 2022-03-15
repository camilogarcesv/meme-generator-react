export const getMemes = async () => {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes");

    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
