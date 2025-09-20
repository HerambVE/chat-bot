const getEmo = async (text) => {
  try {
    const response = await fetch(`${process.env.COLAB_API_URL}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: `${text}` }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error while fetching emotion:", err.message);
    return { error: true, message: err.message };
  }
};

export { getEmo };
