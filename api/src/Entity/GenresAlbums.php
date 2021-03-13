<?php

namespace App\Entity;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * GenresAlbums
 *@ApiResource(
 *   collectionOperations={
 *      "get"={},
 *     },
 * 
 * itemOperations={
 *       "get"={},
 *     }
 *)
 * @ORM\Table(name="genres_albums", indexes={@ORM\Index(name="genres_albums_album_id", columns={"album_id"}), @ORM\Index(name="genres_albums_genre_id", columns={"genre_id"})})
 * @ORM\Entity
 */
class GenresAlbums
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="genre_id", type="integer", nullable=false)
     */
    private $genreId;

    /**
     * @var int
     *
     * @ORM\Column(name="album_id", type="integer", nullable=false)
     */
    private $albumId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGenreId(): ?int
    {
        return $this->genreId;
    }

    public function setGenreId(int $genreId): self
    {
        $this->genreId = $genreId;

        return $this;
    }

    public function getAlbumId(): ?int
    {
        return $this->albumId;
    }

    public function setAlbumId(int $albumId): self
    {
        $this->albumId = $albumId;

        return $this;
    }


}
