<?php

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Elasticsearch\DataProvider\Filter\OrderFilter;

/**
 * Albums
 *@ApiResource(
 *   collectionOperations={
 *      "get"={},
 *     },
 * 
 * itemOperations={
 *       "get"={},
 *     }
 *)
 *@ApiFilter(OrderFilter::class, properties={"name" : "asc"})
 *@ApiFilter(SearchFilter::class, properties={"name": "start"})
 *@ApiFilter(SearchFilter::class, properties={"artistId": "exact"})
 * @ORM\Table(name="albums", indexes={@ORM\Index(name="albums_artist_id", columns={"artist_id"})})
 * @ORM\Entity
 */
class Albums
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
     * @ORM\Column(name="artist_id", type="integer", nullable=false)
     */
    private $artistId;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="text", length=65535, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=65535, nullable=false)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="cover", type="text", length=65535, nullable=false)
     */
    private $cover;

    /**
     * @var string
     *
     * @ORM\Column(name="cover_small", type="text", length=65535, nullable=false)
     */
    private $coverSmall;

    /**
     * @var int
     *
     * @ORM\Column(name="release_date", type="integer", nullable=false)
     */
    private $releaseDate;

    /**
     * @var int
     *
     * @ORM\Column(name="popularity", type="integer", nullable=false)
     */
    private $popularity;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getArtistId(): ?int
    {
        return $this->artistId;
    }

    public function setArtistId(int $artistId): self
    {
        $this->artistId = $artistId;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCover(): ?string
    {
        return $this->cover;
    }

    public function setCover(string $cover): self
    {
        $this->cover = $cover;

        return $this;
    }

    public function getCoverSmall(): ?string
    {
        return $this->coverSmall;
    }

    public function setCoverSmall(string $coverSmall): self
    {
        $this->coverSmall = $coverSmall;

        return $this;
    }

    public function getReleaseDate(): ?int
    {
        return $this->releaseDate;
    }

    public function setReleaseDate(int $releaseDate): self
    {
        $this->releaseDate = $releaseDate;

        return $this;
    }

    public function getPopularity(): ?int
    {
        return $this->popularity;
    }

    public function setPopularity(int $popularity): self
    {
        $this->popularity = $popularity;

        return $this;
    }


}
