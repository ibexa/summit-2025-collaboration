<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Collaboration\Cart\Persistence\Values;

use DateTimeImmutable;
use Ibexa\Collaboration\Persistence\Values\AbstractSession;

final class CartSession extends AbstractSession
{
    private string $cartIdentifier;

    public function __construct(
        int $id,
        string $cartIdentifier,
        string $token,
        int $userId,
        DateTimeImmutable $createdAt,
        DateTimeImmutable $updatedAt
    ) {
        parent::__construct($id, $token, $userId, $createdAt, $updatedAt);

        $this->cartIdentifier = $cartIdentifier;
    }

    public function getCartIdentifier(): string
    {
        return $this->cartIdentifier;
    }
}
