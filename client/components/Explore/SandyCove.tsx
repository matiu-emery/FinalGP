import Location from './Location'

function SandyCove() {
  const info = {
    bgImage: 'sandycove.jpg',
    locationName: 'Sandy Cove',
    locationText: `As you arrive in Sandy Cove, you can smell the sea and feel the hot
  sun on your skin. You look down at your pet and they're playing in the sand. How cute!`,
    events: [
      {
        choiceText: `Search the sand for treasure`,
        chance: 40,
        outcomes: [
          {
            outcomeText: `You search the sand for treasure when your pet spots something glinting in the sand! Gain 100 money!`,
            changeMoney: 100,
            changeHunger: -10,
          },
          {
            outcomeText: `You spend hours combing the sand, but end up with nothing to show for it but a nasty sunburn.`,
            changeHunger: -10,
          },
        ],
      },
      {
        choiceText: `Buy some melon water (-$10)`,
        chance: 100,
        outcomes: [
          {
            outcomeText: `Wandering up to a ramshackle hut on the edge of the sand, you hear a loud voice. "MELON WATER? WANNA MELON WATER?". There seems to be no-one there, but when you peer over the edge of the shop window, a tiny Fluttery with comically oversized spectacles grins up at you. "MELON WATER?" he yells, not changing his volume despite being right in front of you. You nod, handing over the money. Almost too fast to see, he flits around the hut, and you hear the whirring of machines and the clinking of cookware, until you're handed a very pink looking liquid in a bottle. You get a MelonWater!`,
            changeMoney: -10,
            addItem: 16,
          },
        ],
      },
      {
        choiceText: `Explore the strange ruins`,
        chance: 10,
        isHungerCheck: true,
        outcomes: [
          {
            outcomeText: `You clamber through the old ruins that skirt the edges of the beach. It looks like an ancient civilisation that worshipped the sun once lived here. As you venture deeper into the ruins, you stumble, almost falling... and your pet catches you from a spike pit. Phew! You keep walking, and you find some sort of ceremonial chamber. In the center is an altar, and a perfectly ripe fruit sits in the center. You warily take the fruit... but no traps or tricks are set off. Was it safe all along - or are you just lucky? You quickly walk away before you can find out. You gain a Rare Temple Fruit!`,
            addItem: 21,
            changeHunger: -10,
          },
          {
            outcomeText: `You step into the mysterious temple, and you see carved images around you. Although they've been worn away by time and the sand swirling in the air, you can faintly interpret the pictures... You see a figure, loowing over a great temple, one that looks suspiciously like the one you're in... You hear a faint growl behind you, and see an ominous shadow creep out from the door. Your pet growls, and you grab your pet, scrabbling away. Whatever that was, you don't want to meet it.`,
            changeHunger: -10,
          },
        ],
      },
    ],
  }

  return (
    <div>
      <Location
        bgImage={info.bgImage}
        locationName={info.locationName}
        locationText={info.locationText}
        events={info.events}
      />
    </div>
  )
}

export default SandyCove
