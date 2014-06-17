<div id="page" class="<?php print $classes; ?>">

  <?php include('page-header.inc'); ?>

  <?php if ($page['above_content']): ?>
    <div id="above-content">
      <div class="l--constrained">
        <?php print render($page['above_content']); ?>
      </div>
    </div>
  <?php endif; // end Above Content ?>

  <div id="main">

      <?php if ($messages): ?>
        <div id="messages" class="clearfix">
            <?php print $messages; ?>
        </div>
      <?php endif; // end messages ?>

      <div id="main-content">

        <?php if (render($tabs)): ?>
          <div id="tabs">
            <div class="l--constrained">
              <?php print render($tabs); ?>
            </div>
          </div>
        <?php endif; // end tabs ?>
        
        <div class="l--constrained">
          <div id="content">

            <?php if ($page['highlighted']): ?>
              <div id="highlighted">
               <?php print render($page['highlighted']); ?>
              </div>
            <?php endif; // end highlighted ?>

            <?php if (!$is_front && strlen($title) > 0): ?>
              <h1 <?php if (!empty($title_attributes)) print $title_attributes ?>>
                <?php print $title; ?>
              </h1>
            <?php endif; ?>

            <?php if ($page['help']): ?>
              <div id="help">
                <?php print render($page['help']); ?>
              </div>
            <?php endif; // end help ?>

            <?php print render($page['content']); ?>

          </div>
        </div>

        <?php if ($page['sidebar_first']): ?>
          <div id="sidebar-first" class="aside">
            <?php print render($page['sidebar_first']); ?>
          </div>
        <?php endif; // end sidebar_first ?>

        <?php if ($page['sidebar_second']): ?>
          <div id="sidebar-second" class="aside">
            <?php print render($page['sidebar_second']); ?>
          </div>
        <?php endif; // end sidebar_second ?>
      </div>

      <?php if ($page['below_content']): ?>
        <div id="below-content">
          <div class="l--constrained">
            <?php print render($page['below_content']); ?>
          </div>
        </div>
      <?php endif; // end Below Content ?>

    </div>

  <?php include('page-footer.inc'); ?>

</div>
