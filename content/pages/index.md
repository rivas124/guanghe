---
title: Home
layout: PageLayout
sections:
  - type: QuoteSection
    elementId: ''
    colors: colors-a
    quote: |
      Attentively accumulate a bit to create the industry boutique
    backgroundImage:
      url: /images/bg.jpg
      altText: Product Marketing Manager Quote
      styles:
        self:
          opacity: 70
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      title:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
  - type: FeaturedPeopleSection
    elementId: ''
    variant: variant-a
    colors: colors-f
    title: Member
    subtitle: Good team
    actions: []
    people:
      - content/data/team/desmond-eagle.json
      - content/data/team/dianne-ameter.json
      - content/data/team/hilary-ouse.json
      - content/data/team/person-kefmms050.json
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - colors: colors-a
    elementId: ''
    title: Remote doesn’t mean alone. Here are so great features
    subtitle: >-
      These are all excellent features that will provide exactly the things
      you’re looking for.
    items:
      - type: FeaturedItem
        title: React
        featuredImage:
          url: /images/faster.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
      - type: FeaturedItem
        title: Angular
        featuredImage:
          url: /images/smarter.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
      - type: FeaturedItem
        title: Vue
        featuredImage:
          url: /images/focused.svg
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
          type: ImageBlock
        styles:
          self:
            textAlign: left
            borderColor: border-dark
            borderWidth: 1
            borderStyle: solid
            padding:
              - pt-4
              - pl-4
              - pb-6
              - pr-4
    columns: 3
    enableHover: false
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: flex-start
    type: FeaturedItemsSection
  - type: RecentPostsSection
    elementId: ''
    showDate: false
    showAuthor: false
    showExcerpt: false
    variant: variant-a
    actions:
      - type: Button
        label: All blog
        altText: View All Posts
        url: /blog
        style: primary
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    title: Blog
    colors: colors-a
    recentCount: 3
  - type: ContactSection
    colors: colors-f
    backgroundSize: inset
    title: Get early access
    text: >
      Sign up your team today to be the first to try out our new product to
      increase your team’s productivity
    form:
      type: FormBlock
      variant: variant-b
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: Sign Up
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: center
      text:
        textAlign: center
---
