<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Collaboration\Cart\Persistence\Values;

use App\Collaboration\Cart\CartSessionType;
use DateTimeImmutable;
use Ibexa\Collaboration\Persistence\Values\AbstractSessionCreateStruct;

final class CartSessionCreateStruct extends AbstractSessionCreateStruct
{
    private string $cartIdentifier;

    public function __construct(
        string $token,
        int $ownerId,
        string $cartIdentifier,
        ?DateTimeImmutable $createdAt = null,
        ?DateTimeImmutable $updatedAt = null
    ) {
        parent::__construct($token, $ownerId, $createdAt, $updatedAt);

        $this->cartIdentifier = $cartIdentifier;
    }

    public function getCartIdentifier(): string
    {
        return $this->cartIdentifier;
    }

    public function setCartIdentifier(string $cartIdentifier): void
    {
        $this->cartIdentifier = $cartIdentifier;
    }

    public function getDiscriminator(): string
    {
        return CartSessionType::IDENTIFIER;
    }
}
