import { BiLinkExternal } from 'react-icons/bi';
import Button from './button';
import { GridInput } from '../../../globals';
import Image from 'next/image';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 1rem auto;
  max-width: 70rem; // only large enough for 3 tiles wide
`;

const StyledTile = styled.div`
  width: 20rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;

  border-radius: var(--border-radius);
  background-color: var(--dark-navy);
  box-shadow: 0 0 0 var(--yellow-tint);

  transition: 0.15s all ease-in-out;
  transition: 0.25s box-shadow ease-in-out;

  p {
    margin: 0 0.5rem;
    font-size: 1rem;
  }

  .tile-header {
    width: 100%;
    display: flex;

    .title,
    .title h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 1.2rem;
      font-weight: bold;
      margin: 0 0.5rem;
      color: var(--light-slate);

      svg {
        font-size: 1.1rem;

        path {
          color: var(--dark-slate);
        }
      }

      h3 {
        margin: 0;
      }
    }
    .links {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .desc {
    height: 100%;
    font-size: 1rem;
    max-width: 20rem;
    text-align: start;
  }
  .tags {
    width: 100%;
    margin-top: 0.2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: flex-start;

    .button {
      padding: 0.3rem 0.5rem;
    }
  }

  .image-container {
    display: flex;
    width: 100%;
    min-height: 8rem;

    span,
    image {
      flex-grow: 1;
      border-radius: var(--border-radius);
    }
  }

  &:hover {
    /* scale: 1.1; */
    box-shadow: 0 0 1rem var(--yellow-tint);
  }
`;

const Grid = ({ gridData }: { gridData: GridInput[] }) => {
  const addLinks = (
    links: { text?: string; icon?: JSX.Element; url: string }[] | undefined,
  ) => {
    if (links) {
      return links.map((link, index) => {
        return (
          <Button
            key={index}
            text={link.icon || link.text || ''}
            link={link.url}
            newTab
          />
        );
      });
    }
    return <></>;
  };

  return (
    <StyledGrid>
      {gridData.map((tile, index) => {
        return (
          <StyledTile key={index}>
            <div className="image-container">
              <Image
                unoptimized
                objectFit="cover"
                src={tile.image}
                alt="Image"
                width="100%"
                height="100%"
              />
            </div>
            <span className="tile-header">
              {tile.link ? (
                <a
                  href={tile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="title"
                >
                  <h3>{tile.title}</h3>
                  <BiLinkExternal />
                </a>
              ) : (
                <h3 className="title">{tile.title}</h3>
              )}
              <span className="links">
                {addLinks(tile['additional-links']) as JSX.Element}
              </span>
            </span>
            <p className="desc">{tile.desc}</p>
            <div className="tags">
              {tile.tags?.map((tag, index) => {
                return <Button key={index} text={tag} />;
              })}
            </div>
          </StyledTile>
        );
      })}
    </StyledGrid>
  );
};

export default Grid;
