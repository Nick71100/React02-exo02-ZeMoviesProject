import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const API_KEY = "884d52e7234bf6b25aeaf2b7eac5ad2a";

function starsVote(note) {
  const stars = [];
  const starAverage = Math.round(note);

  for (let i = 1; i <= 10; i++) {
    if (i <= starAverage) {
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={regularStar} />);
    }
  }

  return stars;
}

function Media() {
  const params = useParams();
  const [media, setMedia] = useState(null);

  function formatDate(media) {
    return new Date(media.release_date).toLocaleDateString();
  }

  useEffect(() => {
    async function fetchDatas() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=${API_KEY}`
      );

      const data = await response.json();

      setMedia(data);
    }

    fetchDatas();
  }, []);

  return (
    <main>
      <Link to={"/"}>⬅️ Back to Home</Link>

      {!media ? (
        <p>Loading ...</p>
      ) : (
        <article>
          <h2>{media.original_name || media.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
            alt=""
          />
          <p>{media.overview}</p>
          <p>
            Average vote: {media.vote_average.toFixed(2)}
            {starsVote(media.vote_average)}
          </p>
          <p>Release Date: {formatDate(media)}</p>
        </article>
      )}
    </main>
  );
}

export default Media;
