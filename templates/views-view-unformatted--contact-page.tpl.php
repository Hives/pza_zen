<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php
  function odd($var) {
    return ($var & 1);
  }
  function even($var) {
    return !odd($var);
  }
  $left_column = array_filter($rows, "even", ARRAY_FILTER_USE_KEY);
  $right_column = array_filter($rows, "odd", ARRAY_FILTER_USE_KEY);
?>
<div class="address-column left-column">
  <?php foreach ($left_column as $id => $row): ?>
    <div<?php if ($classes_array[$id]): ?> class="<?php print $classes_array[$id]; ?>"<?php endif; ?>>
      <div class="address">
        <?php print $row; ?>
      </div>
    </div>
  <?php endforeach; ?>
</div>
<div class="address-column right-column">
  <?php foreach ($right_column as $id => $row): ?>
    <div<?php if ($classes_array[$id]): ?> class="<?php print $classes_array[$id]; ?>"<?php endif; ?>>
      <div class="address">
        <?php print $row; ?>
      </div>
    </div>
  <?php endforeach; ?>
</div>