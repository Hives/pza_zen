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

<?php $i = 0; ?>
<?php foreach ($rows as $id => $row): ?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
    <?php print $row; ?>
    <?php $i += 1; ?>
    <div class="carousel-control">
  		<a href="#prev" class="prev">&lt;</a>
  		<?php echo $i; ?> / <?php echo count($rows); ?>
  		<a href="#next" class="next">&gt;</a>
  	</div>
  </div>
<?php endforeach; ?>
