<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\Collaboration\Cart\Query\Criterion;

use Ibexa\Contracts\Collaboration\Session\Query\CriterionInterface;
use Ibexa\Contracts\CoreSearch\Values\Query\Criterion\FieldValueCriterion;

final class Cart extends FieldValueCriterion implements CriterionInterface
{
    public function __construct($value)
    {
        parent::__construct('cart', $value);
    }
}
