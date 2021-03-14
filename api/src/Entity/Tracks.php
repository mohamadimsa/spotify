<?php

namespace App\Entity;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Tracks
 *@ApiResource(
 *   collectionOperations={
 *      "get"={},
 *     },
 * 
 * itemOperations={
 *       "get"={},
 *     }
 *)
 *@ApiFilter(SearchFilter::class, properties={"albumId": "exact"})
 * @ORM\Table(name="tracks", uniqueConstraints={@ORM\UniqueConstraint(name="songs_id", columns={"id"})}, indexes={@ORM\Index(name="songs_album_id", columns={"album_id"})})
 * @ORM\Entity
 */
class Tracks
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
     * @ORM\Column(name="album_id", type="integer", nullable=false)
     */
    private $albumId;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="text", length=65535, nullable=false)
     */
    private $name;

    /**
     * @var int
     *
     * @ORM\Column(name="track_no", type="integer", nullable=false)
     */
    private $trackNo;

    /**
     * @var int
     *
     * @ORM\Column(name="duration", type="integer", nullable=false)
     */
    private $duration;

    /**
     * @var string
     *
     * @ORM\Column(name="mp3", type="text", length=65535, nullable=false)
     */
    private $mp3;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getTrackNo(): ?int
    {
        return $this->trackNo;
    }

    public function setTrackNo(int $trackNo): self
    {
        $this->trackNo = $trackNo;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    public function getMp3(): ?string
    {
        return $this->mp3;
    }

    public function setMp3(string $mp3): self
    {
        $this->mp3 = $mp3;

        return $this;
    }


}
