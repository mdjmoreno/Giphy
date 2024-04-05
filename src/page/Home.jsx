import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button, TextField } from "@mui/material";

import GifItem from "../components/GifItem";
import GifModal from "../components/GifModal";

import { getGiphys } from "../Api/getGiphys";

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedGif, setSelectedGif] = useState(null);
  const {
    mutate: getData,
    data,
    isLoading,
  } = useMutation({
    mutationFn: getGiphys,
  });

  const onSearchButtonClicl = () => {
    getData(query);
  };

  const onInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const onItemButtonClick = (data) => {
    setSelectedGif(data);
  };

  const onModalClose = () => {
    setSelectedGif(null);
  };

  const onNext = () => {
    const { index } = selectedGif || {};
    let nextIndex = index + 1;
    if (nextIndex >= data.length) nextIndex = 0;
    setSelectedGif({ data: data[nextIndex], index: nextIndex });
  };

  const onPrevious = () => {
    const { index } = selectedGif || {};
    let nextIndex = index - 1;
    if (nextIndex < 0) nextIndex = data.length - 1;
    setSelectedGif({ data: data[nextIndex], index: nextIndex });
  };

  return (
    <main>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <TextField
          variant="filled"
          type="text"
          value={query}
          onChange={onInputChange}
        />
        <Button variant="contained" onClick={onSearchButtonClicl}>
          Search
        </Button>
      </header>

      <section>
        {isLoading && <p>Loading...</p>}
        {data && (
          <div style={{ display: "flex", gap: "10", flexWrap: "wrap" }}>
            {data.map((gif, i) => (
              <GifItem
                key={gif.id}
                data={gif}
                style={{ width: 200 }}
                onClick={() => onItemButtonClick({ data: gif, index: i })}
              />
            ))}
          </div>
        )}
      </section>
      <GifModal
        opened={!!selectedGif}
        data={selectedGif?.data}
        onClose={onModalClose}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </main>
  );
}
