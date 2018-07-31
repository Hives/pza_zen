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
<?php foreach ($rows as $id => $row): ?>
<?php if($classes_array[$id]) {
    $classes = strtolower($classes_array[$id]);
    //
    // terrible hack because it puts "art spaces" in as two separate classes and
    // i can't work out why
    $classes = str_replace("art spaces", "art-spaces", $classes);
    $class_string = ' class="' . $classes . '"';
} else {
    $class_string = '';
} ?>
  <div<?php print $class_string; ?>>
    <?php print $row; ?>
  </div>
<?php endforeach; ?>
